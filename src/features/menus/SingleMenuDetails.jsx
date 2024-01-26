import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useCurrentUser } from '../Auth/useCurrentUser';
import MenuEdit from './MenuOperationEdit';
import MenuDelete from './MenuOperationDelete';

function MenuDetails({ menu, display }) {
  const { item_name, price, description, image, allergies, item_id } = menu;
  const { isAutenticated } = useCurrentUser();
  return (
    <div
      className={` overflow-hidden transition-all duration-500 ease-in-out ${
        display ? 'max-h-[440px] lg:max-h-[850px]' : 'invisible max-h-0'
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
        {isAutenticated && (
          <div className="mb-4 flex justify-end gap-4">
            <MenuEdit menu={menu} />
            <MenuDelete id={item_id} />
          </div>
        )}
      </Card>
    </div>
  );
}

export default MenuDetails;
