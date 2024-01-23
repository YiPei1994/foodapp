import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function MenuDetails({ menu, display }) {
  const { item_name, price, description, image, allergies } = menu;
  return (
    <div
      className={` overflow-hidden transition-all duration-500 ease-in-out ${
        display ? 'max-h-[440px] lg:max-h-[550px]' : 'invisible max-h-0'
      } `}
    >
      <Card maxW="xl">
        <CardBody>
          <Image src={image} alt={item_name} borderRadius="lg" />
          <div className="mt-6 flex items-center justify-between">
            <Heading size="md">{item_name}</Heading>
            <Text color="green.600" fontSize="2xl">
              €{price}
            </Text>
          </div>
          <Stack mt="6" spacing="3">
            <Text className="line-clamp-2">{description}</Text>
            <Text>{allergies} </Text>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default MenuDetails;
