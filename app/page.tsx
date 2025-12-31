import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Zap, Shield } from "lucide-react";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center px-6 py-20 text-center md:py-32">
				<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
					AI-Powered Data Analytics
				</h1>
				<p className="mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
					Transform your data into actionable insights with advanced AI algorithms
				</p>
				<div className="flex flex-col gap-4 sm:flex-row">
					<Button size="lg">Get Started</Button>
					<Button size="lg" variant="outline">
						Learn More
					</Button>
				</div>
			</section>

			{/* Features Section */}
			<section className="bg-gray-50 px-6 py-20">
				<div className="mx-auto max-w-6xl">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						<Card>
							<CardHeader>
								<BarChart3 className="mb-2 h-10 w-10 text-blue-600" />
								<CardTitle>Advanced Analytics</CardTitle>
								<CardDescription>
									Uncover hidden patterns and trends in your data with AI-powered analysis
								</CardDescription>
							</CardHeader>
						</Card>

						<Card>
							<CardHeader>
								<Zap className="mb-2 h-10 w-10 text-yellow-600" />
								<CardTitle>Lightning Fast</CardTitle>
								<CardDescription>
									Process millions of data points in seconds with optimized algorithms
								</CardDescription>
							</CardHeader>
						</Card>

						<Card>
							<CardHeader>
								<Shield className="mb-2 h-10 w-10 text-green-600" />
								<CardTitle>Secure & Private</CardTitle>
								<CardDescription>
									Enterprise-grade security ensures your data stays protected at all times
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="mt-auto border-t bg-white px-6 py-8">
				<div className="mx-auto max-w-6xl">
					<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
						<p className="text-sm text-gray-600">
							© 2025 AI Analytics. All rights reserved.
						</p>
						<div className="flex gap-6">
							<a href="#" className="text-sm text-gray-600 hover:text-gray-900">
								About
							</a>
							<a href="#" className="text-sm text-gray-600 hover:text-gray-900">
								Contact
							</a>
							<a href="#" className="text-sm text-gray-600 hover:text-gray-900">
								Privacy
							</a>
							<a href="#" className="text-sm text-gray-600 hover:text-gray-900">
								Terms
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
