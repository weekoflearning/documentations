
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);



<Highlight color="#25c2a0">Sample document for making contribution </Highlight> 

[GitHub Repo]("https://gitbub.com/weekoflearning/documentations")

---

## TOPIC NAME
author : Author name

### list of topic 1
- sub topic 1
- sub topic 2
- sub topic 3

### list of topic 2
- sub topic 1
- sub topic 2


- Mermaid flow charts can be included in markdown documents
 

## Annontations 
you can use following annotations to define something important 

:::note
this will render a note
:::

:::tip
this wil render a tip
:::

:::info
this will render info
:::

:::caution
this renders caution
:::

:::danger
this renders danger
:::


## Image
Images are also supported , you would need to add the image to the md file like this. 

<img src={"img/IMG_20210515_160400_603.jpg"} alt="Example banner" />