import { useAppDispatch } from "@app/store/hooks"
import { useEffect, useState } from "react"
import { RootState } from "@app/store/store"
import { useSelector } from "react-redux"
import checkJwtTokenAndRetrieveFavorites from "@app/helper/checkJwtTokenAndRetrieveFavorites"

const useGetFavoriteBarsFromStoreOrRetrieveHook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const dispatch = useAppDispatch()
    const favoritesIds = useSelector((state: RootState) => state.favorites.favoritesIds)
    const favoritesBars = useSelector((state: RootState) => state.favorites.favoritesBars)
    console.log('HOOK favoritesIds', favoritesIds)

    useEffect(() => {
        if (favoritesIds.length === 0) {
            setIsLoading(true)
            try {
                checkJwtTokenAndRetrieveFavorites(dispatch, favoritesIds)
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Failed to fetch favorites')
            } finally {
                setIsLoading(false)
            }
        }
    }, [])

    return {
        isLoading,
        error,
        favoritesIds,
        favoritesBars
    }
}

export default useGetFavoriteBarsFromStoreOrRetrieveHook;