import { Fragment, useState, useCallback } from 'react';
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from "components/ui/accordion"

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState("red");

  const onColorChange = useCallback((e) => {setBackgroundColor(e.target.value)},[]);
  return (
    <Fragment>
      <section className="py-10 bg-amber-500">
        <div className="container">
          <p>TEST</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Arkaplan Rengi</AccordionTrigger>
        <AccordionContent>
          <input type="color" onChange={onColorChange}/>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Yazı Ekle</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </section>
      <section className='p-10 w-full' style={{backgroundColor: backgroundColor}}></section>
    </Fragment>
  )
}
