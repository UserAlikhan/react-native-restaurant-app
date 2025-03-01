import { Image, StyleSheet, Text, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { BarResponse } from "@app/types/apiResponseTypes"

type Props = {
    bar: BarResponse
}

const FavoriteBarsCardForProfilePage = ({ bar }: Props) => {
    return (
        <View style={styles.favoriteItem}>
            <Image
                source={{ uri: 'https://static.vecteezy.com/system/resources/previews/005/145/464/non_2x/bar-logo-lettering-design-template-vector.jpg' }}
                style={styles.barImage}
            />
            <View style={styles.favoriteInfo}>
                <Text style={styles.barName}>{bar.name}</Text>
                <Text style={styles.cuisine}>{bar.state} • {bar.city}</Text>
            </View>
            <MaterialIcons name="favorite" size={24} color="#FF4444" />
        </View>
    )
}

const styles = StyleSheet.create({
    favoriteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    barImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    favoriteInfo: {
        flex: 1,
        marginLeft: 12,
    },
    barName: {
        fontSize: 16,
        fontWeight: '600',
    },
    cuisine: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});

export default FavoriteBarsCardForProfilePage;
