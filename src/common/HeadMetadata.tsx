type HeadMetadataProps = Partial<{
  title: string;
  description: string;
  keywords: string[];
}>;

export const HeadMetadata = ({
  title = 'Project Title',
  description = 'Project Description',
  keywords = [],
}: HeadMetadataProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
    </>
  );
};
