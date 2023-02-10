import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "My Writing",
        Image: require("/home/sonnymonroe/mabra/docusaurus-project/my-site/static/img/images/brain.png")
            .default,
        description: (
            <>
                Docusaurus was designed from the ground up to be easily
                installed and used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: "About Me",
        Image: require("/home/sonnymonroe/mabra/docusaurus-project/my-site/static/img/images/swingingBlock.png")
            .default,
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the
                chores. Go ahead and move your docs into the <code>docs</code>{" "}
                directory.
            </>
        ),
    },
    {
        title: "My Projects",
        Image: require("/home/sonnymonroe/mabra/docusaurus-project/my-site/static/img/images/MyWriting.png")
            .default,
        description: (
            <>
                Extend or customize your website layout by reusing React.
                Docusaurus can be extended while reusing the same header and
                footer.
            </>
        ),
    },
];

function Feature({ Image, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <img src={Image} className={styles.featureImage} alt={title} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx, img) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
