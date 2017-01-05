function generateHeadline() {
	var number = Math.floor(Math.random() * 27) + 3;
	var adjectives = ["", "Advanced", "Amazing", "Astonishing", "Best", "Bold", "Breakthrough", "Bright", "Brilliant", "Crazy", "Clever", "Creative", "Crucial", "Digital Marketing", "Effective", "Epic", "Essential", "Fast", "Foolproof", "Free", "Fresh", "Fun", "Genius", "Important", "Incredible", "Indispensable", "Ingenious", "Inspired", "Inspiring", "Key", "Killer", "Memorable", "Moral, Ethical, & Perfectly Legal", "Must-Know", "Need-to-Know", "New", "Notable", "Powerful", "Pro", "Professional", "Proven", "Quick", "Shocking", "Simple", "Smart", "Strategic", "Stunning", "Successful", "Surprising", "Top", "Unconventional", "Unexpected", "Unique", "Unusual"];
	var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
	var noun1s = ["Facts", "Ideas", "Methods", "Principles", "Hints", "Ideas", "Inside Secrets", "Quick Fixes", "Resources", "Rules", "Solutions", "Steps", "Strategies", "Suggestions", "Tips", "Tools", "Trends", "Tricks", "Ways"];
	var noun1 = noun1s[Math.floor(Math.random() * noun1s.length)];
	var verbs = ["Accelerate", "Advance", "Amplify", "Boost", "Develop", "Double", "Enhance", "Expand", "Fire Up", "Grow", "Improve", "Increase", "Leverage", "Magnify", "Maximize", "Overhaul", "Prepare", "Raise", "Reboot", "Revamp"," Revitalize", "Refresh", "Rev Up", "Transform", "Triple", "Quadruple", "Skyrocket", "Spruce Up", "Stimulate", "Strengthen", "Supercharge", "Supplement", "Update", "Upgrade"];
	var verb = verbs[Math.floor(Math.random() * verbs.length)];
	var noun2s = ["Audience Engagement", "Blog&nbsp;Posts", "Brand Awareness", "Brand Recognition", "Business Strategy", "Content Marketing", "Content Marketing Strategy", "Content&nbsp;Reach", "Conversion&nbsp;Rate", "Customer Referrals", "Customer&nbsp;Reviews", "Email Engagement", "Email Open&nbsp;Rate", "Facebook Audience", "Follower&nbsp;Count", "Newsletter Subscriptions", "Lead&nbsp;Generation", "LinkedIn Network", "Online&nbsp;Sales", "Professional Network", "Referral&nbsp;Rate", "Revenue Stream", "ROI", "Sales&nbsp;Volume", "Search&nbsp;Traffic", "Social Media Impact", "Social&nbsp;Media Marketing", "Twitter Following", "Value Proposition", "Website Traffic"];
	var noun2 = noun2s[Math.floor(Math.random() * noun2s.length)];

	document.getElementById("headline").innerHTML = number + " " + adjective + " " + noun1 + " To " + verb + " Your " + noun2;
}
