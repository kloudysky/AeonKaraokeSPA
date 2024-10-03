import React from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

type FeatureCardProps = {
  title: string;
  description: string;
  imageName: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageName,
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `);

  // Find the image that matches the imageName
  const imageNode = data.allFile.nodes.find(
    (node: any) => node.relativePath === imageName
  );

  if (!imageNode) {
    return null; // Or render a placeholder image
  }

  const image = getImage(imageNode.childImageSharp.gatsbyImageData);

  return (
    <div className="feature-card">
      <GatsbyImage image={image!} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
