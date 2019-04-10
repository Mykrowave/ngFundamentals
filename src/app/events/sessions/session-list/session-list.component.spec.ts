import { SessionListComponent } from './session-list.component';
import { ISession } from '../../shared/isession';



describe('Session-list component', () => {

  let component: SessionListComponent;
  let mockSessionService;
  let mockAuthService;

  beforeEach(() => {
    mockSessionService = jasmine.createSpyObj('mockSessionService', ['deleteVoter']);
    mockAuthService = jasmine.createSpyObj('mockAuthService', ['isAuthenticated']);
    component = new SessionListComponent(mockSessionService, mockAuthService);
  });

  describe('ngOnChanges', () => {
    it('should filter list correctly', () => {
      // arrange
      component.sessions =
        [
          {name: 'Session 1', level: 'intermediate'},
          {name: 'Session 2', level: 'beginner'},
          {name: 'Session 3', level: 'intermediate'},

        ] as ISession[];
      component.filterBy = 'beginner';
      component.sortBy = 'name';
      // act
      component.ngOnChanges();
      // assert
      expect(component.visibleSessions.length).toBe(1);
      expect(component.visibleSessions[0].name).toBe('Session 2');
    });
  });
  describe('ngOnChanges', () => {
    it('should sort list correctly', () => {
      // arrange
      component.sessions =
        [
          {name: 'Session 1', level: 'intermediate'},
          {name: 'Session 3', level: 'beginner'},
          {name: 'Session 2', level: 'intermediate'},

        ] as ISession[];
      component.filterBy = 'all';
      component.sortBy = 'name';
      // act
      component.ngOnChanges();
      // assert
      expect(component.visibleSessions[2].name).toBe('Session 3');
    });
  });

});
