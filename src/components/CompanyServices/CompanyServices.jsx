import React from "react";
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./CompanyServices.module.scss";
import CustomTabs from "../CustomTabs/CustomTabs";
import CompanyServicesContentBlock from "../CompanyServicesContentBlock/CompanyServicesContentBlock";
import ScrollObserver from "../ScrollObserver/ScrollObserver";
const CompanyServices = () => {
  let companyServicesArray = [
    {
      serviceName: "Лендінг",
      textContent:
        "Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна, презентація Завдяки зручності такого формату, можналегко подати користувачу всю важливу інформацію та швидко підвести його до покупки Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна, презентація Завдяки зручності такого формату, можналегко подати користувачу всю важливу інформацію та швидко підвести його до покупки Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна, презентація Завдяки зручності такого формату, можналегко подати користувачу всю важливу інформацію та швидко підвести його до покупки",
      img: "https://st4.depositphotos.com/1607243/39212/i/600/depositphotos_392128558-stock-photo-computer-laptop-smartphone-tablet-desktop.jpg",
    },
    {
      serviceName: "Багатосторінковий сайт",
      textContent:
        "Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна, презентація Завдяки зручності такого формату, можналегко подати користувачу всю важливу інформацію та швидко підвести його до покупки",
      img: "https://st4.depositphotos.com/1607243/39212/i/600/depositphotos_392128558-stock-photo-computer-laptop-smartphone-tablet-desktop.jpg",
    },
    {
      serviceName: "Інтернет магазин",
      textContent:
        "Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна, презентація Завдяки зручності такого формату, можналегко подати користувачу всю важливу інформацію та швидко підвести його до покупки",
      img: "https://st4.depositphotos.com/1607243/39212/i/600/depositphotos_392128558-stock-photo-computer-laptop-smartphone-tablet-desktop.jpg",
    },
    {
      serviceName: "Аудит сайту",
      textContent:
        "Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна, презентація Завдяки зручності такого формату, можналегко подати користувачу всю важливу інформацію та швидко підвести його до покупки",
      img: "https://st4.depositphotos.com/1607243/39212/i/600/depositphotos_392128558-stock-photo-computer-laptop-smartphone-tablet-desktop.jpg",
    },
    {
      serviceName: "Індивідуальна консультація",
      textContent:
        "Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна, презентація Завдяки зручності такого формату, можналегко подати користувачу всю важливу інформацію та швидко підвести його до покупки",
      img: "https://st4.depositphotos.com/1607243/39212/i/600/depositphotos_392128558-stock-photo-computer-laptop-smartphone-tablet-desktop.jpg",
    },
  ];
  return (
    <ScrollObserver>
      <section className={styles.wrapper}>
        <div className={styles.wrapperContent}>
          <h2 className={styles.title}>Послуги</h2>

          <CustomTabs>
            <TabList className={styles.tabList}>
              {companyServicesArray.map(({ serviceName }, index) => (
                <Tab key={index} className={styles.tab}>
                  {serviceName}
                </Tab>
              ))}
            </TabList>

            {companyServicesArray.map(
              ({ serviceName, img, textContent }, index) => (
                <TabPanel key={index}>
                  <CompanyServicesContentBlock
                    serviceName={serviceName}
                    img={img}
                  >
                    {textContent}
                  </CompanyServicesContentBlock>
                </TabPanel>
              )
            )}
          </CustomTabs>
        </div>
      </section>
    </ScrollObserver>
  );
};

export default CompanyServices;
