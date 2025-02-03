import { getAllBars } from "@app/apiRequests/barCalls";
import { useAppDispatch } from "@app/store/hooks";
import { setAllBars } from "@app/store/slices/barSlice";
import { RootState } from "@app/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useGetFromStoreOrRetrieveAllBarsHook = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const dispatch = useAppDispatch()
    const bars = useSelector((state: RootState) => state.bars.allBars);

    useEffect(() => {
        const loadBars = async () => {
            // If bars already exist in store, do not make api call
            if (bars && bars.length > 0) {
                return bars;
            }

            try {
                setIsLoading(true);
                setError(null);

                const response = await getAllBars();
                dispatch(setAllBars(response));
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch bars');
            } finally {
                setIsLoading(false);
            }
        }

        loadBars();
    }, []);

    return { isLoading, error, bars };
}