/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';



const App = () => {
  const [showActivities, setShowActivities] = useState(false);
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any>({});

  const workItems = ['Activity 1', 'Activity 2', 'Activity 3'];

  const handleToggleActivities = () => setShowActivities(!showActivities);

  const handleSelectAll = () => {
    const newSelectedItems:any = {};
    workItems.forEach((item) => {
      newSelectedItems[item] = !selectedAll;
    });
    setSelectedAll(!selectedAll);
    setSelectedItems(newSelectedItems);
  };

  const handleSelectItem = (item:any) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
      <Box className="flex-1 w-[100vw] h-screen">
        <Box className='flex p-5 justify-between w-full border-b-[1px] border-gray-300'>
          <Heading size={'lg'}>Work Orders</Heading>

          <Button size={'md'} colorScheme='teal'>
            Save
          </Button>
        </Box>
        <Tabs className='w-full p-5'>
          <TabList className='w-full'>
            <Tab  className='w-1/5 border-none'>Overview</Tab>
            <Tab  className='w-1/5 border-none'>Other</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {/* <Box>
                <Button onClick={handleToggleActivities}>
                  {showActivities ? 'Collapse' : 'Expand'} Civil Package
                </Button>

                <Collapse in={showActivities} animateOpacity>
                  <Box mt="4" p="4" borderWidth="1px" borderRadius="lg">
                    <Checkbox isChecked={selectedAll} onChange={handleSelectAll}>
                      Select/Deselect All
                    </Checkbox>
                    <Box mt="2">
                      {workItems.map((item) => (
                        <Checkbox
                          key={item}
                          isChecked={selectedItems[item] || false}
                          onChange={() => handleSelectItem(item)}
                          className="ml-4"
                        >
                          {item}
                        </Checkbox>
                      ))}
                    </Box>
                  </Box>
                </Collapse>
              </Box> */}

<Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
            </TabPanel>
            <TabPanel>
              Hello World
            </TabPanel>
          </TabPanels>

          
        </Tabs> 
      </Box>
  );
};

export default App;
