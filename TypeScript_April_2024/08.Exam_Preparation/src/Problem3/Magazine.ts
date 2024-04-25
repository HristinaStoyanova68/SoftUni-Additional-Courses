import { Cloth } from "./Cloth";

export class Magazine {
  private type: string;
  private capacity: number;
  private clothes: Cloth[];

  constructor(type: string, capacity: number) {
    this.type = type;
    this.capacity = capacity;
    this.clothes = [];
  }

  addCloth(cloth: Cloth): void {
    if (this.clothes.length < this.capacity) {
      this.clothes.push(cloth);
    }
  }

  removeCloth(color: string): boolean {
    const indexOfCloth = this.clothes.findIndex(
      (cloth) => cloth.color === color
    );

    if (indexOfCloth !== -1) {
      this.clothes.splice(indexOfCloth, 1);
      return true;
    }
    
      return false;
    
  }

  getSmallestCloth(): Cloth | null {
    if (this.clothes.length === 0) {
      return null;
    }

    return this.clothes.reduce((smallest, cloth) =>
      cloth.size < smallest.size ? cloth : smallest
    );
  }

  getCloth(color: string): Cloth | null {
    return this.clothes.find((cloth) => cloth.color === color) || null;
  }

  getClothCount(): number {
    return this.clothes.length;
  }

  report(): string {
    const sortedClothes = [...this.clothes].sort((a, b) => a.size - b.size);
    const formatedCloth = sortedClothes
      .map((cloth) => cloth.toString())
      .join("\n");

    return `${this.type} magazine contains:\n${formatedCloth}`;
  }
}
