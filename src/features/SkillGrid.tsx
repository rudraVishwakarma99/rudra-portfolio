import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setActiveFilter } from '../store/uiSlice';
import { SkillGroup } from '../types';
import { Badge } from '../ui-kit/Badge';
import { Card } from '../ui-kit/Card';

interface SkillGridProps { data: SkillGroup[]; }

export const SkillGrid: React.FC<SkillGridProps> = ({ data }) => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state: RootState) => state.ui.activeFilter);

  return (
    <section id="skills" className="content-section" aria-labelledby="skills-heading">
      <h3 id="skills-heading">Technical Expertise (Click to filter experience)</h3>
      <div className="skills-grid">
        {data.map((group, idx) => (
          <Card key={idx} className="skill-category">
            <h4>{group.category}</h4>
            <div className="skill-list" role="group" aria-label={`${group.category} skills`}>
              {group.items.map((item) => (
                <Badge 
                  key={item} 
                  label={item} 
                  isActive={activeFilter === item}
                  onClick={() => dispatch(setActiveFilter(item))}
                  aria-label={`Filter experience by ${item}`}
                />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};