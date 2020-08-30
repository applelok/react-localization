import React from "react";
import { useIntl } from "react-intl";
import { localizationKeys } from "../i18n/keys";

export default function LocalizedMessage() {
  const intl = useIntl();
  return (
    <div>
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
    </div>
  );
}
