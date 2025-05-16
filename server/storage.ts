import { users, type User, type InsertUser, type Registration, type InsertRegistration, registrations } from "@shared/schema";

// Storage interface for CRUD operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Registration methods
  getRegistration(id: number): Promise<Registration | undefined>;
  getRegistrationByEmail(email: string): Promise<Registration | undefined>;
  getAllRegistrations(): Promise<Registration[]>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private registrationsMap: Map<number, Registration>;
  currentUserId: number;
  currentRegistrationId: number;

  constructor() {
    this.users = new Map();
    this.registrationsMap = new Map();
    this.currentUserId = 1;
    this.currentRegistrationId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getRegistration(id: number): Promise<Registration | undefined> {
    return this.registrationsMap.get(id);
  }

  async getRegistrationByEmail(email: string): Promise<Registration | undefined> {
    return Array.from(this.registrationsMap.values()).find(
      (registration) => registration.email === email,
    );
  }

  async getAllRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrationsMap.values());
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = this.currentRegistrationId++;
    const now = new Date();
    const registration: Registration = { 
      ...insertRegistration, 
      id,
      createdAt: now
    };
    
    this.registrationsMap.set(id, registration);
    return registration;
  }
}

export const storage = new MemStorage();
