export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="py-3 bg-light border-top">
            <p className="text-center text-muted mb-0">
                &copy; {year} <strong>KRISHIRENT</strong>. All Rights Reserved.
            </p>
        </footer>
    );
}