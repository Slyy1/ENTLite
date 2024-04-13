import React, { useState } from "react";
import { View, Text } from "react-native";
import { Agenda, AgendaEntry } from "react-native-calendars";

const SchoolSchedule = () => {
  const [selectedDate, setSelectedDate] = useState("");

  type AgendaEntry = {
    name: string;
    time: string;
  };

  const schedule: Record<string, AgendaEntry[]> = {
    "2022-01-01": [
      { name: "Class 1", time: "9:00 AM" },
      { name: "Class 2", time: "11:00 AM" },
    ],
    "2022-01-02": [
      { name: "Class 3", time: "10:00 AM" },
      { name: "Class 4", time: "2:00 PM" },
    ],
    // Add more entries for different dates
  };
  const getName = (date: string, index: number) => {
    if (schedule[date]) {
      const entry = schedule[date][index];
      return entry ? entry.name : "";
    }
    return "";
  };

  const getTime = (date: string, index: number) => {
    if (schedule[date]) {
      const entry = schedule[date][index];
      return entry ? entry.time : "";
    }
    return "";
  };

  return (
    <View>
      <Agenda
        items={schedule}
        renderItem={(item: AgendaEntry, firstItemInDay: boolean) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.time}</Text>
          </View>
        )}
        renderEmptyDate={() => (
          <View>
            <Text>No classes today</Text>
          </View>
        )}
      />
      {selectedDate && schedule[selectedDate as keyof typeof schedule] ? (
        schedule[selectedDate as keyof typeof schedule].map((item, index) => (
          <View key={index}>
            <Text>{item.subject}</Text>
            <Text>{item.time}</Text>
          </View>
        ))
      ) : (
        <Text>No classes today</Text>
      )}
    </View>
  );
};

export default SchoolSchedule;
