
const Blog = () => {
    return (
        <div className="py-10 rounded-lg">
            <div className="w-3/4 m-auto p-4 overflow-hidden shadow bg-base-100">
                <article>
                    <h2 className="text-xl font-bold">1. What is One way data binding?
                    </h2>
                    <p className="mt-4">

                        One-way data binding is a data flow mechanism in which data is transferred from a data source to a UI element, allowing the UI element to display and update based on the source data. However, changes made in the UI element do not affect the source data. It ensures that data flows in one direction, from the source to the UI, maintaining a clear and predictable data flow.

                    </p>

                </article>
            </div>

            <div className="w-3/4 m-auto p-4 overflow-hidden  shadow bg-base-100">
                <article>
                    <h2 className="text-xl font-bold">2. What is NPM in node.js?

                    </h2>
                    <p className="mt-4">

                        NPM, or Node Package Manager, is a widely-used package manager for JavaScript and Node.js. It simplifies the process of installing, managing, and sharing software packages and libraries. Developers use NPM to access and distribute open-source JavaScript modules, making it a fundamental tool for building Node.js applications and managing project dependencies.

                    </p>

                </article>
            </div>

            <div className="w-3/4 m-auto p-4 overflow-hidden shadow bg-base-100">
                <article>
                    <h2 className="text-xl font-bold">3. Different between Mongodb database vs mySQL database.
                    </h2>
                    <p className="mt-4">There are few major differences between <strong>Mongodb Database VS mySQL Database</strong> <br /> <br />

                        <strong>1. Data Model:</strong> <br />
                        MongoDB is NoSQL, using a flexible document-oriented data model.
                        - MySQL is SQL, using structured tables with predefined schemas.
                        <br />
                        <strong>2. Schema: </strong> <br />
                        - MongoDB is schema-less, allowing dynamic data with varying structures.
                        - MySQL enforces a fixed schema with rigid table and column definitions.
                        <br />
                        <strong>3. Query Language:</strong><br />
                        - MongoDB uses flexible query language for unstructured data.
                        - MySQL employs SQL for structured data, enabling complex relational queries.

                        These differences affect data modeling, scalability, and suitability for specific use cases.
                    </p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://cafeu.vercel.app/img/customer/4.jpg" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Reduanul Haque</h3>
                            <time dateTime="2021-02-18" className="text-sm">Nov 8th 2023</time>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    );
};

export default Blog;