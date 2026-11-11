import HomeHeader from "./_components/HomeHeader";
import Welcome from "./_components/Welcome";
import HabitList from "./_components/HabitList";

export default function Home() {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <Welcome></Welcome>
            <HabitList></HabitList>
        </div>
    );
};