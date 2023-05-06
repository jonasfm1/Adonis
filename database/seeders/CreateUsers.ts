import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        name: 'yung da silva',
        email: 'yung@cataline.io',
        password: 'secret',
        role: 'admin'
      },
      {
        name: 'normal da silva',
        email: 'normal@cataline.io',
        password: 'secret',
        role: 'normal'
      }
    ])
  }
}
