import Section from "./ui/Section";

export default function Footer() {
    return(
        <footer>
            <Section>
                <div className="flex flex-col gap-5 items-center">
                    <a href=""><img className="w-60" src="/logo.png" alt=""/></a>
                    <p className="text-center"><em>Build better routines, track your progress, and master your daily flow.</em></p>
                </div>

                <div className="flex gap-20 md:gap-40">
                    <div>
                        <h3 className="font-bold p-5">Product</h3>
                        <ul className="flex flex-col items-center gap-5">
                            <li><a href="">Features</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold p-5">Resources</h3>
                        <ul className="flex flex-col items-center gap-5">
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-5">
                    <h3 className="font-bold">Created by</h3>
                    <p><em>Designed & built by Gilberto Bispo</em></p>
                    <p>© 2026 HabitFlow. All rights reserved.</p>
                </div>
            </Section>
        </footer>
    );
};