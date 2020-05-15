import React from "react";
import { render } from "@testing-library/react";
import Page from "pages/index";
// import { Providers } from 'components';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

describe("Home page", () => {
  it("render", () => {
    const { getByText } = render(<Page />, { wrapper: Wrapper });

    const paragraph = getByText(
      /Find in-depth information about Next.js features and API./
    );
    expect(paragraph).toBeInTheDocument();
  });
  // it('matches snapshott', () => {
  // 	const { container } = render(<Index />, { wrapper: Providers });

  // 	expect(container).toMatchSnapshot();
  // });
});
