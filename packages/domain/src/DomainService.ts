import { Route, Get, Tags, Put, Body, Delete, Path, Hidden } from "@tsoa/runtime";
import { Domain, domainRepository } from ".";

@Route("domain")
@Tags("Domain")
export default class DomainService {
  @Get("{id}")
  public async getDomain(id: string): Promise<Domain | null> {
    const domain: Domain = await domainRepository.getDomain(id);

    if (!domain) {
      return null;
    }

    return domain;
  }

  @Get()
  public async createDomain(): Promise<Domain> {
    const domain: Domain = await domainRepository.createDomain();

    return domain;
  }

  @Put()
  public async putDomain(
    @Body() requestDomain: Domain
  ): Promise<Domain> {
    const domain: Domain = await domainRepository.putDomain(
      requestDomain
    );

    return domain;
  }

  @Delete("{id}")
  public async deleteDomain(@Path() id: string): Promise<Domain> {
    const domain: Domain = await domainRepository.deleteDomain(
      Object.assign(new Domain(), {
        id
      })
    );

    return domain;
  }
}
