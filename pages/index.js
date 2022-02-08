import { VStack } from '@chakra-ui/react';
import Card from '../src/components/Card';

export default function Home() {
  const handleExpandMenu = () => console.log('Expanded');

  return (
    <VStack height='100vh' alignItems='center'>
      <Card
        badge='Funding'
        authorImage='/Ralph_Edwards.svg'
        author='Ralph Edwards'
        time='3h'
        content={[
          'Velit ut ultrices quis viverra eu, ultricies nulla at nec. Ut diam venenatis egestas massa vulputate nam. Pretium eros, imperdiet odio sit. Natoque quam mi ut leo. Sed ut sit cursus nunc, sit. Magna neque vel amet sem vulputate lacus ut.',
          'Diam lacus sed ornare vulputate. Vulputate magna id suspendisse aliquam. Sit fames est proin diam morbi purus non. Purus donec eu arcu euismod. Volutpat facilisi venenatis phasellus maecenas in.'
        ]}
        expandMenu={handleExpandMenu}
      />
    </VStack>
  )
}
