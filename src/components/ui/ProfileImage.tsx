import { Image, StyleSheet, View } from "react-native"

const ProfileImage = ({ size }: { size: number }) => {

    return (
        <View style={[styles.profileImageContainer, { width: size, height: size }]}>
            <Image
                source={{ uri: 'https://static.wikia.nocookie.net/villains/images/0/06/Patrick_Bateman_V.2.jpg/revision/latest/scale-to-width/360?cb=20240607224424' }}
                style={styles.profileImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 50,
    },
    profileImageContainer: {
        borderWidth: 1,
        borderRadius: 50,
        overflow: 'hidden',
    },
})

export default ProfileImage