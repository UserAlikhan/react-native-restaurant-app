import { getAllBars, getNearestBars } from "@app/apiRequests/barCalls";
import { useAppDispatch } from "@app/store/hooks";
import { setNearestBars } from "@app/store/slices/barSlice";
import { RootState } from "@app/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetLocationHook } from "./useGetLocationHook";

export const useGetFromStoreOrRetrieveNearestBarsHook = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const dispatch = useAppDispatch()
    const nearestBars = useSelector((state: RootState) => state.bars.nearestBars);

    const { location } = useGetLocationHook();

    useEffect(() => {
        const loadBars = async () => {
            // If bars already exist in store, do not make api call
            if (nearestBars && nearestBars.length > 0) {
                return nearestBars;
            }

            try {
                setIsLoading(true);
                setError(null);

                if (!location) {
                    console.log("No location found");
                    return;
                }

                const response = await getNearestBars(location);
                dispatch(setNearestBars(response));
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch bars');
            } finally {
                setIsLoading(false);
            }
        }

        loadBars();
    }, []);

    return { isLoading, error, nearestBars };
}