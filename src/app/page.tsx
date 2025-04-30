import Card from "@/components/Card";
import Text from "@/components/Text";
export default function Home() {
  return (
   <div>
                <Card
                  pixelSize={4}
                  radius={4}
                  borderWidth={1}
                  padding={4}
                  borderColor="shades-100"
                  backgroundColor={'#74A600'}
                >
                  <Text
                    textType={'label'}
                    textColor="white"
                    textWeight="bold"
                    className="mx-2"
                  >
                    Hacker Dashboard
                  </Text>
                </Card>
    </div>
  );
}
