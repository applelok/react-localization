import React from "react";
import { useIntl } from "react-intl";
import { localizationKeys } from "../i18n/keys";
import { Header, Segment, Divider } from "semantic-ui-react";

export default function LocalizedMessage() {
  const intl = useIntl();
  return (
    <Segment>
      <Header>
        {intl.formatMessage({ id: localizationKeys.general.basicInfo })}
      </Header>
      {intl.formatMessage(
        { id: localizationKeys.student.name },
        { name: "Apple" }
      )}
      <br />
      {intl.formatMessage(
        { id: localizationKeys.student.id },
        { id: "1001231" }
      )}
      <br />
      {intl.formatMessage(
        { id: localizationKeys.student.contact.phone },
        { phone: 12345678 }
      )}
      <Divider />
      <Header>
        {" "}
        {intl.formatMessage({ id: localizationKeys.general.projects })}
      </Header>
      {localizationKeys.student.projects.map((p, idx) => {
        return (
          <ul>
            <li>
              <span>
                {intl.formatMessage({
                  id: localizationKeys.student.projects[idx].name,
                })}
              </span>
              {` (${intl.formatMessage({
                id: localizationKeys.student.projects[idx].desc,
              })})`}
            </li>
          </ul>
        );
      })}
    </Segment>
  );
}
