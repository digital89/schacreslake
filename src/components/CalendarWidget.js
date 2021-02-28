import React from "react";

const str = `
<div class="calendly-inline-widget" data-url="https://calendly.com/jaredreich" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
`;

const CalendarWidget = () => {
  return <div dangerouslySetInnerHTML={{ __html: str }} />;
};

export default CalendarWidget;
