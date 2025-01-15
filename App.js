import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const notifications = [
    {
        id: '1',
        icon: '✅',
        title: 'Bước 1: Xác định nhu cầu khách hàng',
        description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
        date: '20/08/2020, 06:00',
    },
    {
        id: '2',
        icon: '👥',
        title: 'Bạn có khách hàng mới!',
        description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
        date: '20/08/2020, 06:00',
    },
    {
        id: '3',
        icon: '👥',
        title: 'Khách hàng được chia sẻ bị trùng',
        description:
            'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
        date: '20/08/2020, 06:00',
    },
    {
        id: '4',
        icon: '✅',
        title: 'Công việc sắp đến hạn trong hôm nay',
        description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
        date: '20/08/2020, 06:00',
    },
    {
        id: '5',
        icon: '✅',
        title: 'Công việc đã quá hạn',
        description:
            'Bạn có 13 công việc đã quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
        date: '20/08/2020, 06:00',
    },
];

const App = () => {
    const renderNotification = ({ item }) => (
        <View style={styles.notificationContainer}>
            <View style={styles.iconContainer}>
                <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Thông báo</Text>
            <FlatList
                data={notifications}
                renderItem={renderNotification}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 30,
    },
    notificationContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    iconContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#e6f7ff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    icon: {
        fontSize: 20,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    date: {
        fontSize: 12,
        color: '#999',
    },
});

export default App;

