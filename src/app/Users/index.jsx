import { View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { TextMedium } from "~components/Text";

import GradientLine from "~components/gradient-line";

import SectionTitle from "~components/section-title";

import { baseURL } from "~services/createUser";

import Animated, { FadeInUp, FadeOutDown } from "react-native-reanimated";
import UserCard from "~components/user-card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UsersScreen() {
  const [users, setUsers] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);

    const res = await axios.get(`${baseURL}/api/users`);
    setUsers(res);

    setRefreshing(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${baseURL}/api/users`);
        setUsers(res.data);
        console.log(res);
      } catch (err) {
        console.error("erro: ", err);
      }
    }      
    fetchData();
  }, []);

  return (
    <View className="h-full w-full flex-1 items-center justify-start bg-background">
      <View className="px-5 flex-col py-4 items-start justify-start w-full">
        <View className="w-full flex-row justify-between items-center">
          <SectionTitle text="Registros" classname="text-4xl text-white" />
          <LinearGradient
            className="h-7 w-[96px] rounded-full border-none items-center justify-center"
            colors={["#00C59F", "#00D636"]}
            end={{ x: 0.1, y: 0.2 }}
          >
            <View className="w-[95%] items-center h-[90%] px-3 py-1 bg-background rounded-full">
              {users.length > 0 && (
                <TextMedium textClassName="text-xs text-white">
                  {users.length +
                    " " +
                    (users.length > 1 ? " usuários" : "usuário")}
                </TextMedium>
              )}
            </View>
          </LinearGradient>
        </View>
        <GradientLine />
      </View>

      <Animated.FlatList
        horizontal={false}
        entering={FadeInUp.delay(200)}
        exiting={FadeOutDown.delay(200)}
        contentContainerStyle={{ paddingBottom: 24 }}
        className="w-full h-full p-4 pb-10"
        keyExtractor={(item, id) => id.toString()}
        data={users}
        renderItem={({ item }) => <UserCard data={item} />}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
}
