import { TestBed } from '@angular/core/testing';
import { SessionService } from './session.service';
import { ISession } from '../shared/isession';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

describe('SessionService', () => {

  let sessionService: SessionService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    sessionService = new SessionService(mockHttp);
  });

  // it('should be created', () => {
  //   const service: SessionService = TestBed.get(SessionService);
  //   expect(service).toBeTruthy();
  // });

  describe('deleteVoter', () => {
    it('should remove voter from list of voters', () => {
      // arrange
      const session = { voters: ['joe', 'mike'], id: 4 };
      mockHttp.delete.and.returnValue(of(false));
      // act
      sessionService.deleteVoter(5, session as ISession, 'mike');
      // assert
      expect(session.voters.length).toBe(1);
      expect(session.voters.indexOf('joe')).toBeGreaterThan(-1);
    });

    it('should be called with correct URL', () => {
      // arrange
      const session = { voters: ['joe', 'mike'], id: 4 };
      mockHttp.delete.and.returnValue(of(false));
      // act
      sessionService.deleteVoter(5, session as ISession, 'mike');
      // assert
      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/5/sessions/4/voters/mike');
    });
    describe('addVoter', () => {
      it('should be called with correct URL', () => {
        // arrange
        const session = { voters: ['joe', 'mike'], id: 4 };
        mockHttp.post.and.returnValue(of(false));
        // act
        sessionService.addVoter(5, session as ISession, 'mike');
        // assert
        expect(mockHttp.post).toHaveBeenCalledWith('/api/events/5/sessions/4/voters/mike', {}, jasmine.any(Object));
      });
    });


  });
});
