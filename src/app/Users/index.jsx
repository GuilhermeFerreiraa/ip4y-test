import { RefreshControl, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { TextLight, TextMedium } from "~components/Text";

import GradientLine from "~components/gradient-line";

import SectionTitle from "~components/section-title";

import { baseURL } from "~helpers/utils";

import Animated, { FadeInUp, FadeOutDown } from "react-native-reanimated";

import UserCard from "~components/user-card";

import { useCallback, useEffect, useState } from "react";

import axios from "axios";
import { Link } from "expo-router";

export default function UsersScreen() {
  const [users, setUsers] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  async function fetchData() {
    try {
      const res = await axios.get(`${baseURL}/api/users`);
      setUsers(res.data);
    } catch (err) {
      console.error("erro: ", err);
    }
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View className="bg-background flex-1">
      <View className="flex-1 items-center justify-start bg-background">
        <View className="px-5 flex-col py-4 items-start justify-start w-full">
          <View className="w-full flex-row justify-between items-center">
            <View className="flex-col h-[90px w-2/4]">
              <SectionTitle text="Registros" classname="text-4xl text-white" />
              <GradientLine />
            </View>
            {users && users.length > 0 && (
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
            )}
          </View>

          {!users && (
            <View className="items-center flex-col h-[90%] justify-center w-full">
              <TextLight textClassName="text-white text-lg">
                Nenhum registro foi localizado
              </TextLight>
              <Link href="/" className="mt-2">
                <TextLight textClassName="text-white text-base underline capitalize">
                  adicionar
                </TextLight>
              </Link>
            </View>
          )}
        </View>
      </View>
      {users && users.length > 0 && (
        <Animated.FlatList
          horizontal={false}
          entering={FadeInUp.delay(200)}
          exiting={FadeOutDown.delay(200)}
          className="px-4 min-h-[80%]"
          keyExtractor={(item, id) => id.toString()}
          data={users}
          renderItem={({ item }) => <UserCard data={item} />}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
}
