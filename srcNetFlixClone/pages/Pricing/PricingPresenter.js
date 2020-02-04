import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Tabs selectedIndex={index} onSelect={index => setIndex(index)}>
        <TabList>
          <Tab>
            <span>TAB1</span>
          </Tab>
          <Tab>
            <span>TAB2</span>
          </Tab>
          <Tab>
            <span>TAB3</span>
          </Tab>
        </TabList>
        <div>now is {index}</div>
        <TabPanel>
          <div>IM ONE</div>
        </TabPanel>
        <TabPanel>
          <div>IM TWO</div>
        </TabPanel>
        <TabPanel>
          <div>IM THREE</div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
