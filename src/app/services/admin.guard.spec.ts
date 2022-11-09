import {AdminGuard} from "./admin.guard";
import {TestBed} from "@angular/core/testing";

describe('AdminGuard', () =>{
  let guard: AdminGuard;

  beforeEach(() =>{
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () =>{
    expect(guard).toBeTruthy();
  });
});
