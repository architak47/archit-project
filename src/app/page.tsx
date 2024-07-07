import Footer from "@/components/footer";
import AchievementSection from "@/components/homepage/achievment-section";
import ClientSection from "@/components/homepage/client-section";
import CommunitySection from "@/components/homepage/community-section";
import CommunityUpdateSection from "@/components/homepage/community-update-section";
import CTASection from "@/components/homepage/cta-section";
import CustomerSection from "@/components/homepage/customer-section";
import HeroSection from "@/components/homepage/hero-section";
import UnlockSection from "@/components/homepage/unlock-section";
import UnseenSection from "@/components/homepage/unseen-section";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<ClientSection />
			<CommunitySection />
			<UnseenSection />
			<AchievementSection />
			<UnlockSection />
			<CustomerSection />
			<CommunityUpdateSection />
			<CTASection />
			<Footer />
		</main>
	);
}
