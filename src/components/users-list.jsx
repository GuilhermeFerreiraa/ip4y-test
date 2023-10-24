import Animated, {
  FadeInUp,
  FadeOutDown,
  Layout,
} from "react-native-reanimated";
import UserCard from "./user-card";

export default function UsersList({ data }) {
  

  return (
    <Animated.ScrollView
      layout={Layout}
      horizontal={false}
      entering={FadeInUp}
      exiting={FadeOutDown}
      className="w-full h-full p-4 pb-10"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      {data.map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
    </Animated.ScrollView>
  );
}
