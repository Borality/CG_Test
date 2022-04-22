import icon_AddProjectFill from "./assets/icon-AddProjectFill.svg";
import caseguard_logo_gray from "./assets/caseguard-logo-gray.svg";
import next_button from "./assets/next-button.svg";
import previous_button from "./assets/previous-button.svg";
import recorder_icon from "./assets/recorder-icon.svg";
import icon_FileMerge from "./assets/icon-FileMerge.svg";
import icon_OpenProjectFill from "./assets/icon-OpenProjectFill.svg";

function App() {
	return (
		<div className="flex flex-1 items-center justify-center h-screen w-screen bg-[#222222]">
			<div className="flex flex-col">
				<div id="upper container" className="flex flex-row">
					<div id="CreatProject-Container">
						<div className="text-xl text-[#FFFFFF]">Create project</div>
						<div className="flex flex-col">
							<CustomButton
								name="Create Project"
								svg={icon_AddProjectFill}
							></CustomButton>
							<CustomButton
								name="Open Project"
								svg={icon_OpenProjectFill}
							></CustomButton>
							<CustomButton
								name="Bulk Redaction"
								svg={icon_FileMerge}
							></CustomButton>
							<CustomButton name="Record" svg={recorder_icon}></CustomButton>
						</div>
					</div>
					<div id="Right-Container" className="ml-7">
						<div className="text-xl text-[#FFFFFF]">Recent Projects</div>
						<div className="bg-neutral-600 py-2.5 pl-2 pr-10 my-1 rounded flex flex-col">
							<ProjectLink text="test.cg" svg={caseguard_logo_gray} />
							<ProjectLink
								text="project123-automatic-detection.cg"
								svg={caseguard_logo_gray}
							/>
							<ProjectLink
								text="project123-automatic-face-detection.cg"
								svg={caseguard_logo_gray}
							/>
							<ProjectLink
								text="project1234-license-plates-automatic-detection.cg"
								svg={caseguard_logo_gray}
							/>
							<ProjectLink text="test.cg" svg={caseguard_logo_gray} />
							<ProjectLink
								text="project123-automatic-detection.cg"
								svg={caseguard_logo_gray}
							/>
							<ProjectLink
								text="project123-automatic-face-detection.cg"
								svg={caseguard_logo_gray}
							/>
						</div>
					</div>
				</div>
				<div className="text-xl text-[#FFFFFF]">Training Course</div>
				<div className="bg-neutral-700 py-3 my-1 rounded flex flex-row items-center justify-center">
					<ArrowButton css = "pl-2" svg={previous_button} />
					<Thumbnail
						text="Create a Project"
						svg="http://i3.ytimg.com/vi/qDE7JRsOJnY/hqdefault.jpg"
					/>
					<Thumbnail
						text="Manual Redaction"
						svg="http://i3.ytimg.com/vi/7nanvh1Yk38/hqdefault.jpg"
					/>
					<Thumbnail
						text="Object Tracking"
						svg="http://i3.ytimg.com/vi/ljcrz6NI9xU/hqdefault.jpg"
					/>
					<Thumbnail
						text="AI Detection"
						svg="http://i3.ytimg.com/vi/K5NLPt4zbUs/hqdefault.jpg"
					/>
					<ArrowButton css = "px-2" svg={next_button} />
				</div>
				<div className="flex flex-row">
				<input type="checkbox" class="checked:bg-blue-500 my-2"/>
				<div className="text-xs text-[#FFFFFF] my-2 ml-2">Show on Launch</div>
				</div>
			</div>
		</div>
	);
}

export default App;

const CustomButton = ({ name, svg }) => {
	return (
		<button className="text-[#FFFFFF] pr-24 pl-4 py-2 my-1 bg-neutral-600 rounded text-left text-sm hover:bg-[#00F3FF]">
			<img className="inline-block mr-2" src={svg} alt="icon" />
			{name}
		</button>
	);
};

const ProjectLink = ({ text, svg }) => {
	return (
		<button className="my-1 underline text-white text-left pl-2 align-top text-xs hover:text-[#00F3FF]">
			<img className="inline-block mr-2" src={svg} alt="icon" />
			{text}
		</button>
	);
};

const Thumbnail = ({ text, svg }) => {
	return (
		<button className="my-1 text-white pl-2 mx-0.5 align-top text-xs text-center items-center justify-center hover:opacity-10">
			<img className="w-32" src={svg} alt="icon" />
			<div className="bg-blue-700 w-32 rounded-b-md py-1 px-2">{text}</div>
		</button>
	);
};

const ArrowButton = ({ svg, css}) => {
	return (
	<button className = "hover:opacity-10">
	<img className={css} src={svg} alt="icon" />
	</button>
	)
};
