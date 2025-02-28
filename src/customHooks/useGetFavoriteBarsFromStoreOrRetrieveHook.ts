import { useAppDispatch } from "@app/store/hooks"
import { useEffect, useState } from "react"
import { RootState } from "@app/store/store"
import { useSelector } from "react-redux"
import { getUserFavoriteBars, getUserFavoritesIds } from "@app/apiRequests/favoritesCalls"
import { setFavoritesIds } from "@app/store/slices/favoritesSlice"
import { setFavoritesBars } from "@app/store/slices/favoritesSlice"
import isTokenValid from "@app/helper/isTokenValid"

const useGetFavoriteBarsFromStoreOrRetrieveHook = ({ user_id, token }: { user_id: number, token: string }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const dispatch = useAppDispatch()
    const favoritesIds = useSelector((state: RootState) => state.favorites.favoritesIds)
    const favoritesBars = useSelector((state: RootState) => state.favorites.favoritesBars)
    console.log('HOOK favoritesIds', favoritesIds)
    useEffect(() => {
        if (favoritesIds.length === 0 && isTokenValid(token)) {
            const retrieveFavorites = async () => {
                setIsLoading(true)
                try {
                    const favoritesIdsRetrieved = await getUserFavoritesIds(user_id, token)
                    const favoritesBarsRetrieved = await getUserFavoriteBars(user_id, token)
                    dispatch(setFavoritesIds(favoritesIdsRetrieved))
                    dispatch(setFavoritesBars(favoritesBarsRetrieved))
                } catch (error) {
                    setError(error instanceof Error ? error.message : 'Failed to fetch favorites')
                } finally {
                    setIsLoading(false)
                }
            }

            retrieveFavorites()
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