import { ThemedText } from "@/components/themed-text";
import { TrueSheet } from "@lodev09/react-native-true-sheet";
import { useRef } from "react";
import { Button, ScrollView, ScrollViewInstance, View } from "react-native";

const items: number[] = [];
for (let index = 0; index < 150; index++) {
  items.push(index);
}

export default function HomeScreen() {
  const scrollableRef = useRef<ScrollViewInstance>(null);
  const sheetRef = useRef<TrueSheet>(null);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="open" onPress={() => sheetRef.current?.present()} />

      <TrueSheet
        ref={sheetRef}
        scrollableRef={scrollableRef}
        initialDetentIndex={0}
        detents={["auto", 0.5]}
        style={{ flex: 1 }}
      >
        <ScrollView ref={scrollableRef}>
          {items.map((item) => (
            <ThemedText key={item}>{item}</ThemedText>
          ))}
        </ScrollView>
      </TrueSheet>
    </View>
  );
}
