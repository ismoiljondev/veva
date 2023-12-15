"use client";
import React, { useState } from "react";
import {
  TERipple,
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

export default function TabsBasicExample(): JSX.Element {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <div className="my-10">
      <TETabs className="border-b-[#98A2B3] border-b-2">
        <TERipple className="bg-black p-0">
          <TETabsItem
            onClick={() => handleBasicClick("tab1")}
            active={basicActive === "tab1"}
            className="tabx mt-0"
          >
            Home
          </TETabsItem>
        </TERipple>
        <TERipple>
          <TETabsItem
            onClick={() => handleBasicClick("tab2")}
            active={basicActive === "tab2"}
            className="tabx mt-0"
          >
            Profile
          </TETabsItem>
        </TERipple>
        <TERipple>
          <TETabsItem
            onClick={() => handleBasicClick("tab3")}
            active={basicActive === "tab3"}
            className="tabx"
          >
            Messages
          </TETabsItem>
        </TERipple>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={basicActive === "tab1"}>Tab 1 content</TETabsPane>
        <TETabsPane show={basicActive === "tab2"}>Tab 2 content</TETabsPane>
        <TETabsPane show={basicActive === "tab3"}>Tab 3 content</TETabsPane>
        <TETabsPane show={basicActive === "tab4"}>Tab 4 content</TETabsPane>
      </TETabsContent>
    </div>
  );
}
