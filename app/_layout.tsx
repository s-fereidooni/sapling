import { Stack } from "expo-router";
import React from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarHeatmap from 'react-native-calendar-heatmap';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RootLayout() {
  return <Stack />;
}

const ProfileScreen = ({ navigation }) => {
  // const donationData = [
  //   { date: "2024-02-01", count: 1 },
  //   { date: "2024-02-02", count: 1 },
  //   { date: "2024-02-03", count: 2 },
  //   { date: "2024-02-05", count: 3 },
  //   { date: "2024-02-10", count: 1 },
  //   { date: "2024-02-15", count: 4 },
  //   { date: "2024-02-20", count: 2 },
  // ];
  const donationData = Array.from({ length: 90 }, (_, i) => {
    const date = new Date(2024, 1, i + 1).toISOString().split("T")[0]; 
    const count = Math.floor(Math.random() * 4) + 1;
    return { date, count };
  });

  return (
    <ScrollView contentContainerStyle={{ padding: 20, alignItems: 'center' }}>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 20 }} />
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10 }}>SONIA</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4CAF50', marginBottom: 5 }}>15 Lives Saved</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2196F3', marginBottom: 15 }}>2 Tons Emissions Saved</Text>
      <Text style={{ fontSize: 18, color: 'gray', marginBottom: 10 }}>Top Categories</Text>
      <Text style={{ fontSize: 18, color: 'orange', marginBottom: 20 }}>🔥 Streak</Text>
      
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Donation Heatmap</Text>
      
      <CalendarHeatmap
        endDate={new Date("2024-02-29")}
        numDays={90}
        values={donationData}
        squareSize={15}
        gutterSize={4}
        showMonthLabels
      />

      <TouchableOpacity 
        style={{ backgroundColor: '#FF9800', padding: 15, borderRadius: 10, marginTop: 20 }}
        onPress={() => navigation.navigate('Donate')}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Go to Donations</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const DonateScreen = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>Time to Donate</Text>
      <TextInput placeholder="Enter amount (e.g., 1¢)" style={{ borderWidth: 1, marginVertical: 10, padding: 10, borderRadius: 8 }} />
      <Button title="Pick a Cause" onPress={() => {}} />
      <Button title="Pick a Charity" onPress={() => {}} />
      <Button title="Donate" onPress={() => {}} />
    </View>
  );
};

const LeaderboardScreen = () => {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Global Leaderboard</Text>
      <Text style={{ fontSize: 20, marginVertical: 10 }}>1. User A - 100 Lives Saved</Text>
      <Text style={{ fontSize: 20 }}>2. User B - 90 Lives Saved</Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>Friends Leaderboard</Text>
      <Text style={{ fontSize: 20, marginVertical: 10 }}>1. Friend X - 50 Lives Saved</Text>
      <Text style={{ fontSize: 20 }}>2. Friend Y - 45 Lives Saved</Text>
    </ScrollView>
  );
};

const SocialActivityScreen = () => {
  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Social Activity</Text>
      <Text style={{ fontSize: 18 }}>See what your friends are donating to</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Profile') {
          iconName = 'account'; 
        } else if (route.name === 'Donate') {
          iconName = 'heart'; 
        } else if (route.name === 'Leaderboard') {
          iconName = 'trophy';
        } else if (route.name === 'Social') {
          iconName = 'chat'; 
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
      <Tab.Screen name="Donate" component={DonateScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Tab.Screen name="Social" component={SocialActivityScreen} />
    </Tab.Navigator>
  );
}

export default MainNavigator;