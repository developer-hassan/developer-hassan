import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-2xl px-4 pt-28 text-justify text-muted-foreground"
    >
      <H2 className="mx-auto w-max text-foreground">About Me</H2>
      <P>
      Welcome to my digital world! I specialize in creating smart solutions using <strong>Python</strong> nd cutting-edge tech, focusing on large language models (LLMs), and other backend applications supported by the APIs using FastAPI and Django. I can efficiently create the efficient backend/full-stack solutions with collaboration since i am a good team player.
      </P>
      <P>
      My educational journey blends an AI and computer science Bachelor's degree from National Textile University with hands-on projects and certifications. Tech tools like LangChain, TensorFlow, FastAPI, Django, Pandas, matplotlib, NumPy, SQL, vectordatabases, and streamlit are my trusted companions.
      </P>
      <P>
      Beyond development, I excel in deploying applications on GCP, Azure, AWS, and crafting Restful APIs and Websockets. Git ensures smooth collaboration through version control and continuous development.
      </P>
      <P>
      In machine learning, deep learning, and LLM, I specialize in fine-tuning models on custom datasets and leverage transfer learning for tailored behaviors. Proficient in SQL and vector databases, I approach data-driven solutions holistically. Community service and mentorship are integral to my ethos, creating an environment for shared learning and growth. I'm more than a developer; a problem solver, community enthusiast, and a perpetual learner, ready to contribute to your journey of success!
      </P>
    </section>
  );
}
