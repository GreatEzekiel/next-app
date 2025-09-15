import React from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

//use without tailwindcss

// const WelsomeTemplate = ({ name }: { name: string }) => {
//   return (
//     <Html>
//         <Preview>Welcome on board!</Preview>
//         <Body style={body}>
//             <Container>
//                 <Text style={heading}>Hello {name}</Text>
//                 <Link href="https://www.example.com">Click here to get started</Link>
//             </Container>
//         </Body>
//     </Html>
//   )
// }

// const body: React.CSSProperties = {
//   margin: '0 auto',
//   padding: '20px',
//   fontFamily: 'Arial, sans-serif',
//   backgroundColor: '#f9f9f9',
// };

// const heading: React.CSSProperties = {
//   fontSize: '24px',
//   fontWeight: 'bold',
//   marginBottom: '10px',
// };

// export default WelsomeTemplate

// using tailwindcss
const WelsomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome on board!</Preview>
      <Tailwind>
        <Body className="">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://www.example.com">
              Click here to get started
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default WelsomeTemplate;
