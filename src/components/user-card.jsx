import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { formatCPF, formatDate } from "~helpers/utils";
import { TextMedium, TextRegular } from "./Text";

export default function UserCard({ data }) {
  return (
    <View className="flex items-start justify-star flex-1 overflow-hidden mt-4">
      <Link
        href={{ params: data, pathname: "/user/[id]" }}
        style={{ flex: 1 }}
        asChild
      >
        <TouchableOpacity className="flex-row bg-black w-full items-start justify-between rounded-lg p-4">
          <View className="flex flex-row items-start justify-start">
            <LinearGradient
              className="h-12 w-12 items-center justify-center rounded-full"
              colors={["#00D636", "#00C59F"]}
              end={{ x: 0.1, y: 0.2 }}
            >
              <View className="flex bg-background rounded-full h-[44px] w-[44px] items-center justify-center">
                <FontAwesome name="user-o" size={28} color="#00D636" />
              </View>
            </LinearGradient>

            <View className="ml-4 flex-col items-start justify-start">
              <View className="flex-row items-center justify-start flex-wrap">
                <TextMedium textClassName="text-white text-xs">
                  {data.name && data.lastName
                    ? data.name + " " + data.lastName
                    : "nome" + " " + "sobrenome"}
                </TextMedium>
              </View>
              <TextRegular textClassName="text-white text-xs">
                CPF:{" "}
                {data.document ? formatCPF(data.document) : "000.000.000-00"}
              </TextRegular>
              <TextRegular textClassName="text-white text-xs">
                {data.email ? data.email : "email@email.com"}
              </TextRegular>
            </View>
          </View>
          <View className="flex-col items-end justify-end">
            <View className="justify-start flex-row-reverse items-center mb-2">
              <FontAwesome name="calendar-o" size={12} color="#00C59F" />
              <TextMedium textClassName="text-xs text-white mr-1">
                {data.birthdate ? formatDate(data.birthdate) : "00/00/0000"}
              </TextMedium>
            </View>

            <View className="justify-start flex-row-reverse items-center">
              <Ionicons
                name={
                  data.gender === "female"
                    ? "female"
                    : data.gender === "male"
                    ? "male"
                    : "male-female"
                }
                size={14}
                color={data.gender !== "male" ? "#00C59F" : "#00D636"}
              />
              <TextMedium textClassName="capitalize text-xs text-white mr-1">
                {data.gender ? data.gender : "gender"}
              </TextMedium>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
