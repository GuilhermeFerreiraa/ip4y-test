import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { TextMedium, TextSemibold } from "~components/Text";
import UsersList from "~components/users-list";

export default function UsersScreen() {
  const data = [
    {
      id: Math.floor().toFixed(2),
      name: "fulano",
      lastName: "da silva",
      email: "teste@teste.com",
      birthdate: "12/12/2002",
      gender: "female",
    },
    {
      id: Math.floor().toFixed(2),
      name: "fulano",
      lastName: "da silva",
      email: "teste@teste.com",
      birthdate: "12/12/2002",
      gender: "male",
    },
    {
      id: Math.floor().toFixed(2),
      name: "fulano",
      lastName: "da silva",
      email: "teste@teste.com",
      birthdate: "12/12/2002",
      gender: "male-female",
    },
    {
      id: Math.floor().toFixed(2),
      name: "fulano",
      lastName: "da silva",
      email: "teste@teste.com",
      birthdate: "12/12/2002",
      gender: "male",
    },
    {
      id: Math.floor().toFixed(2),
      name: "fulano",
      lastName: "da silva",
      email: "teste@teste.com",
      birthdate: "12/12/2002",
      gender: "male-female",
    },
    {
      id: Math.floor().toFixed(2),
      name: "fulano",
      lastName: "da silva",
      email: "teste@teste.com",
      birthdate: "12/12/2002",
      gender: "male",
    },
    {
      id: Math.floor().toFixed(2),
      name: "fulano",
      lastName: "da silva",
      email: "teste@teste.com",
      birthdate: "12/12/2002",
      gender: "female",
    },
    {
      id: Math.floor().toFixed(2),
      name: "fulano",
      lastName: "da silva",
      email: "teste@teste.com",
      birthdate: "12/12/2002",
      gender: "male-female",
    },
    {
      id: Math.floor().toFixed(2),
      name: "fulano",
      lastName: "da silva",
      email: "teste@teste.com",
      birthdate: "12/12/2002",
      gender: "female",
    },
  ];

  return (
    <View className="h-full w-full flex-1 items-center justify-start bg-background">
      <View className="px-5 flex-col py-4 items-start justify-start w-full">
        <View className="w-full flex-row justify-between items-center">
          <TextSemibold textClassName="text-4xl text-white">
            Lista de Usuários
          </TextSemibold>
          {data.length > 0 && (
            <TextMedium textClassName="text-xs text-white">
              {data.length} Usuários
            </TextMedium>
          )}
        </View>
        <LinearGradient
          className="h-[2px] mt-2 w-[65%] border-none items-center justify-center"
          colors={["#00C59F", "#00D636"]}
          end={{ x: 0.1, y: 0.2 }}
        />
      </View>

      <UsersList data={data} />
    </View>
  );
}
