import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  githubUrl: string;
  linkedinUrl: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alexandre Seyffert",
      role: "Idealizador e Fullstack Developer",
      description: "Alexandre, gestor de uma escola infantil, é a mente por trás da ideia da nossa agenda escolar digital. Atuou como desenvolvedor fullstack, sendo o responsável por construir toda a estrutura do projeto utilizando Prisma e React Native, além de gerenciar o deploy. Foi ele quem ergueu o projeto do zero!",
      image: "/images/team/alexandre.png",
      githubUrl: "https://github.com/Alexseyf",
      linkedinUrl: "https://www.linkedin.com/in/alexandre-seyffert-33950730a/"
    },
    {
      id: 2,
      name: "Betânia Amaral",
      role: "Product Owner e Dev Frontend",
      description: "Betânia foi essencial na organização do projeto como Product Owner, utilizando o Jira para gerenciar as tarefas. Contribuiu significativamente com a documentação e o desenvolvimento frontend, focando principalmente na criação da página do aplicativo.",
      image: "/images/team/beta.png",
      githubUrl: "https://github.com/betaniasilva",
      linkedinUrl: "https://www.linkedin.com/in/betania-amaral/"
    },
    {
      id: 4,
      name: "Laura Oliveira",
      role: "Product Owner e Project Designer",
      description: "Laura foi a Product Owner e Project Designer, liderando o grupo com maestria. Foi a responsável por toda a prototipação do projeto, garantindo a visualização e funcionalidade. Além disso, assumiu a liderança, ajudando a cumprir prazos, cobrando tarefas e desenvolvendo a documentação do projeto.",
      image: "/images/team/laura.png",
      githubUrl: "https://github.com/OrtizLaura",
      linkedinUrl: "https://www.linkedin.com/in/laura-oliveira-61b3342a3/"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-text mb-4">
            Nossa <span className="text-blue-600">Equipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os profissionais talentosos que tornaram o <strong className="text-blue-text">Elo Escola</strong> uma realidade
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-sm"
            >
              {/* Image Container */}
              <div className="relative h-64 bg-blue-background flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  onError={(e) => {

                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-32 h-32 rounded-full bg-white flex items-center justify-center border-4 border-white shadow-lg">
                          <span class="text-4xl font-bold text-gray-400">${member.name.charAt(0)}</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>

                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {member.role}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors duration-200"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
