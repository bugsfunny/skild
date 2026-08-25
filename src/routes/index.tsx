import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Terminal } from "lucide-react";
import SkillCard from "#/components/SkillCard";
import { dummySkills } from "#/lib/dummy-skills";

const getSkillsFn = createServerFn({ method: "GET" }).handler(async () => {
	try {
		// const { data } = await getSkills(dataConnect, {
		// 	searchTerm: "",
		// 	limit: 10,
		// });

		// return data.skills;
		return dummySkills;
	} catch (error) {
		console.error(error);
		return [];
	}
});

export const Route = createFileRoute("/")({
	component: App,
	loader: () => getSkillsFn(),
});

function App() {
	const skills = Route.useLoaderData();

	return (
		<div id="home">
			<section className="hero">
				<div className="copy">
					<h1>
						The Registry for <br />
						<span className="text-gradient">Agentic Intelligence</span>
					</h1>
					<p>
						A high-performance registry for procedural agent skills. Discover,
						publish, and operate reusable agent capabilities from a route-driven
						workspace.
					</p>
				</div>

				<div className="actions">
					<Link to="/" className="btn-primary">
						<Terminal size={18} />
						<span>Browse Registry</span>
					</Link>
					<Link to="/" className="btn-secondary">
						Publish Skill
					</Link>
				</div>
			</section>

			<section className="latest">
				<div className="space-y-2">
					<h2>
						Recently Created <span className="text-gradient">Skills</span>
					</h2>
					<p>
						{" "}
						Latest skills loaded from database in descending creation order.
					</p>
				</div>

				<div>
					{skills.length > 0 ? (
						<div className="skills-grid">
							{skills.map((skill) => (
								<SkillCard key={skill.id} {...skill} />
							))}
						</div>
					) : (
						<p>No skills have been created yet.</p>
					)}
				</div>
			</section>
		</div>
	);
}
