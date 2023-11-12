import Terminal from "../util/Terminal"

export default class MenuPrincipal {
    async renderizar() {
        const [_, texto] = await Terminal.menu("Menu Principal", [
            "Opção 1", 
            "Opção 2", 
            "Sair"])

            switch (texto){
                case "Sair":
                process.exit(0)
            }
            await this.renderizar()

    }
}
